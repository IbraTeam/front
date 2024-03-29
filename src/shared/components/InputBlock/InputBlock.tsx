import classNames from 'classnames/bind'
import { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from 'react'
import { getValidatedPhoneNumber } from '@/shared/lib/helpers'
import { Typography } from '@/shared/uikit'
import s from './styles.module.css'

type InputBlockType = 'row' | 'column'

export interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  constValue?: string
  blockType?: InputBlockType
  wrapperClassName?: string
}

const cx = classNames.bind(s)

export const InputBlock = forwardRef<HTMLInputElement, InputBlockProps>(
  (props: InputBlockProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, error, blockType, constValue, wrapperClassName, ...inputProps } = props
    const inputId = useId()

    const telOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.value = getValidatedPhoneNumber(
        e.currentTarget.value,
        e.currentTarget.selectionStart
      )

      if (props.onChange) {
        props.onChange(e)
      }
    }

    const renderInput = () =>
      props.type === 'checkbox' ? (
        <label className={s.switch}>
          <input className={s.switcher} {...inputProps} type="checkbox" id={inputId} />
          <span className={cx({ slider: true, round: true })}></span>
        </label>
      ) : (
        <input
          className={s.input}
          {...inputProps}
          onChange={props.type === 'tel' ? telOnChange : props.onChange}
          ref={ref}
          id={inputId}
        />
      )

    return (
      <div className={cx(s.wrapper, wrapperClassName)}>
        <div className={cx({ block: true, [`${blockType}`]: true })}>
          {!!label && (
            <label htmlFor={inputId} className={s.label}>
              <Typography tag="span" variant="t1">
                {label}
              </Typography>
            </label>
          )}
          {!!constValue && (
            <Typography variant="t4" className={cx({ constValue: true, ellipsis: true })}>
              {constValue}
            </Typography>
          )}
          {!constValue && renderInput()}
        </div>
        {!!error && (
          <Typography tag="span" variant="err1" className={s.errorMessage}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
