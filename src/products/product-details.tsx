import AddProductToCartButton from '@/cart/add-to-cart-button';
import BaseImage from '@/common/base-image';
import { Chip, ChipContent } from '@/common/chip';
import Price from '@/common/price';
import NextLink from '@/routing/next-link';
import { routes } from '@/routing/routing-utils';
import type { Product } from './product-types';

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-lg">
        <BaseImage
          className="object-contain"
          src={product.image}
          alt={product.title}
          priority
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-2xl font-bold">{product.title}</div>
          <div className="text-3xl">
            <Price className="text-primary-dark" value={product.price} />
          </div>
        </div>
        <AddProductToCartButton product={product} />
        <p className="text-sm">{product.description}</p>
        <NextLink
          href={routes.search({
            query: { categories: [product.category.value] },
          })}
        >
          <Chip variant="secondary">
            <ChipContent>{product.category.title}</ChipContent>
          </Chip>
        </NextLink>
      </div>
    </div>
  );
}
