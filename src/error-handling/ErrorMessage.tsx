import { Maybe } from '@src/common/CommonTypes';
import { ApiRequestError } from './ErrorHandlingTypes';

type ErrorMessageProps = React.PropsWithChildren<{
  error: Maybe<Error | ApiRequestError>;
}>;

export default function ErrorMessage({ children, error }: ErrorMessageProps) {
  if (!error) {
    return <>{children}</>;
  }

  const message = error.message ?? 'Something went wrong';

  return (
    <div className="bg-error-lighter text-error-dark border border-error-main rounded-md p-4">
      {message}
    </div>
  );
}
