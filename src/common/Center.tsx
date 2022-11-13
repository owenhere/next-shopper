import classNames from 'classnames';

type CenterProps = React.PropsWithChildren<{
  maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}>;

export default function Center({ maxWidth, className, children }: CenterProps) {
  return (
    <div
      className={classNames(
        {
          'max-w-screen-sm': maxWidth === 'sm',
          'max-w-screen-md': maxWidth === 'md',
          'max-w-screen-lg': maxWidth === 'lg',
          'max-w-screen-xl': maxWidth === 'xl',
          'max-w-screen-2xl': maxWidth === '2xl',
        },
        'mx-auto',
        'w-full',
        className,
      )}
    >
      {children}
    </div>
  );
}