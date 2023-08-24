import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { useEffect, useState } from "react";

type ApiError = {
  success: boolean;
  message: string;
};

export function useApiError(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (error) {
      if ("status" in error) {
        const newError = error.data as ApiError;
        setErrorMessage(newError.message);
      } else {
        setErrorMessage(error.message as string);
      }
    }
  }, [error]);

  return errorMessage;
}
