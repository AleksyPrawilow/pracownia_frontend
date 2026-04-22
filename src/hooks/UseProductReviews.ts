import { useState } from "react";
import type { Pageable } from "../types/Pageable";
import type { Review } from "../types/Review";

export function useProductReviews() {
  const baseurl: string = "http://localhost:8080/reviews/";
  const [reviews, setReviews] = useState<Pageable<Review> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchReviews(
    productId: string,
    page: number = 0,
    pageSize: number = 12,
    sort: string = "creationDate,desc",
  ) {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch(
        baseurl +
          "list?productId=" +
          productId +
          "&page=" +
          page.toString() +
          "&size=" +
          pageSize.toString() +
          "&sort=" +
          sort,
      );
      console.log(result.body);
      if (!result.ok) {
        console.log("Something went wrong");
        throw new Error("Failed to fetch reviews.");
      }
      const json = await result.json();
      console.log(json);
      setReviews(json);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function addReview(
    review: Review,
    onSuccess: () => void = () => {},
    onError: () => void = () => {},
  ) {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(baseurl + "add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: review.product.id,
          creatorUserId: review.creatorUserId,
          rate: review.rate,
          description: review.description,
        }),
      });

      if (!res.ok) {
        onError();
        throw new Error("Failed to post review");
      }
      console.log(res.json());
      fetchReviews(review.product.id);
      onSuccess();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  }

  async function deleteReview(reviewId: string, productId) {
    const res = await fetch(baseurl + "delete?reviewId=" + reviewId, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete the review.");
    }

    console.log("Deleted a review.");
    fetchReviews(productId);
  }

  return {
    reviews,
    loading,
    error,
    fetchReviews: fetchReviews,
    addReview: addReview,
    deleteReview: deleteReview,
  };
}
