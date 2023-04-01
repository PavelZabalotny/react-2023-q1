import React from "react";

export interface RadioConfigInterface {
  ref: React.RefObject<HTMLInputElement>;
  label: string;
  defaultValue: string;
}
