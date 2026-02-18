export default function Spinner({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div
      className={`${dim} border-2 border-gray-light border-t-current rounded-full`}
      style={{ animation: "spin 0.6s linear infinite" }}
    />
  );
}
