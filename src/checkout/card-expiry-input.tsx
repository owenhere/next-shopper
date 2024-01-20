import type { Omit } from '@/common/common-types';
import type { InputRef } from '@/forms/input';
import { Input } from '@/forms/input';
import { forwardRef } from 'react';
import type { NumberFormatBaseProps } from 'react-number-format';
import { NumberFormatBase } from 'react-number-format';

// https://s-yadav.github.io/react-number-format/docs/customization#card-expiry-field
function format(value: string) {
  if (value === '') {
    return '';
  }

  let month = value.substring(0, 2);
  const year = value.substring(2, 4);

  if (month.length === 1 && Number(month[0]) > 1) {
    month = `0${month[0]}`;
  } else if (month.length === 2) {
    // Set the lower and upper boundary.
    if (Number(month) === 0) {
      month = `01`;
    } else if (Number(month) > 12) {
      month = '12';
    }
  }

  return `${month}/${year}`;
}

type CardExpiryInputProps = Omit<
  NumberFormatBaseProps,
  'format' | 'placeholder' | 'customInput'
>;

export const CardExpiryInput = forwardRef<InputRef, CardExpiryInputProps>(
  function CardExpiryInput(props, ref) {
    return (
      <NumberFormatBase
        getInputRef={ref}
        format={format}
        placeholder="MM/YY"
        customInput={Input}
        {...props}
      />
    );
  },
);
