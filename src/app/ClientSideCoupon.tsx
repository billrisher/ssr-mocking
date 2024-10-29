"use client";

import { useEffect, useState } from "react";

export default function ClientSide() {
  const [coupon, setCoupon] = useState<string | null>("DEFAULT100");

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.jsoning.com/mock/public/coupons"
      );
      const responseData: { id: string; code: string }[] =
        await response.json();
      setCoupon(responseData[0]?.code);
    })();
  }, []);

  return (
    <div>
      <h1>{coupon}</h1>
    </div>
  );
}
