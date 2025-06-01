import { Badge, type Sizes, type Variants } from "~/components";

const variants: Variants[] = ["neutral", "error", "warning", "success", "brand"];
const sizes: Sizes[] = ["small", "medium", "large"];

export default function Badges() {
  return (
    <main className="min-h-screen py-[200px] flex justify-center">
      <section className="w-60 h-[236px] justify-start items-center gap-6 inline-flex flex-wrap">{variants.map((variant) => {
        return (
          sizes.map((size) => {
            return (
              <div key={variant + size} className="justify-start items-center gap-6 inline-flex">
                <Badge variant={variant} size={size} />
              </div>
            )
          })
        )
      })}
      </section>
    </main>
  );
}