import ErrorContent, {
  ErrorContentProps,
} from '@src/error-handling/ErrorContent';
import { DEFAULT_ERROR_MESSAGE } from '@src/error-handling/ErrorHandlingUtils';
import { StatusCodes } from 'http-status-codes';
import { NextPage } from 'next';

type ErrorPageProps = ErrorContentProps;

// TODO: Error page'i de app altına taşı
const ErrorPage: NextPage<ErrorPageProps> = (props) => {
  return <ErrorContent {...props} />;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode =
    res?.statusCode ?? err?.statusCode ?? StatusCodes.NOT_FOUND;
  const message = err?.message ?? res?.statusMessage ?? DEFAULT_ERROR_MESSAGE;
  return { statusCode, message };
};

export default ErrorPage;
