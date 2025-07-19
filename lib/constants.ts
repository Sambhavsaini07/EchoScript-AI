export const plansMap = [
  {
    id: "basic",
    name: "Basic",
    description: "Get started with EchoScript!",
    price: "10",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_cNi6oJ5Ab2BRdGqddx3cc00",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RYB7jP3KLRtFhlKY1PK4kXG"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "19.99",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_14A9AVaUv90f31Ma1l3cc01",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1RYB9FP3KLRtFhlKuKrTlcfz"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://speakeasyai-demo.vercel.app";
