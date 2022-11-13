import AddToCartButton from '@src/cart/AddToCartButton';
import NextLink from '@src/routing/NextLink';
import BaseImage, { imageProps } from '@src/common/BaseImage';
import Chip from '@src/common/Chip';
import Price from '@src/common/Price';
import { Product } from './ProductsTypes';
import { routes } from '@src/routing/routes';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col h-full group border-2 p-2 rounded-md">
      <div className="relative cursor-pointer">
        <NextLink href={routes.product({ params: { productId: product.id } })}>
          <div className="p-4">
            <div className="transition duration-500 ease-out bg-transparent transform group-hover:scale-110">
              <BaseImage
                src={product.image}
                alt={product.title}
                {...imageProps.responsive({
                  aspectRatio: '12 / 10',
                  objectFit: 'contain',
                })}
              />
            </div>
          </div>
        </NextLink>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <div className="text-md">
          <Price className="text-primary-dark" value={product.price} />
        </div>
        <h3 className="font-bold text-sm flex-grow text-center">
          {product.title}
        </h3>
        <NextLink
          href={routes.search({
            query: { categories: [product.category.value] },
          })}
          className="mt-2"
        >
          <Chip variant="secondary">{product.category.title}</Chip>
        </NextLink>
      </div>
      <div className="flex-grow" />
      <div className="mt-4">
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
