import React from 'react';
import {
  BaseContainer,
  BaseInput,
  BaseSubtitle,
  BaseTextarea,
  BaseTitle,
} from '@base/index';
import styles from './Input.module.scss';
import { LinkToViewCode } from '@nav/index';
import useDebounce from '@hooks/useDebounce';

interface Props {}

interface IValue {
  text1: string;
  text2: string;
  text3: string;
  password: string;
  text4: string;
  user: string;
  textarea1: string;
  textarea2: string;
  number: number;
}

const Input: React.FC<Props> = () => {
  const [value, setValue] = React.useState<IValue>({
    text1: '',
    text2: '',
    text3: '',
    password: '',
    text4: '',
    user: '',
    textarea1: '',
    textarea2: '',
    number: 0,
  });

  // const debouncedSearchTerm = useDebounce(value, 500);

  // React.useEffect(() => {
  //   console.log('value: ', value);
  // }, []);

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <BaseContainer className="Mb20">
        <BaseTitle className="Mb20">Input</BaseTitle>

        <div className="Headline Mb20">
          <LinkToViewCode
            title="Basic usage example."
            href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
          />
        </div>
        <div className={styles.Inputs}>
          <BaseInput
            name="password"
            placeholder="Basic usage"
            type="text"
            value={value.text1}
            onChange={(val: string) => setNewValue(val, 'text1')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Label"
            name="text"
            placeholder="Basic usage"
            type="text"
            value={value.text2}
            onChange={(val: string) => setNewValue(val, 'text2')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with error"
            name="text"
            error="Some text of error"
            placeholder="Basic usage"
            type="text"
            value={value.text3}
            onChange={(val: string) => setNewValue(val, 'text3')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input password"
            name="password"
            placeholder="Input password"
            type="password"
            icon="eye-off"
            value={value.password}
            onChange={(val: string) => setNewValue(val, 'password')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with icon left"
            name="text"
            placeholder="Basic usage"
            type="text"
            icon="save"
            iconPosition="left"
            value={value.text4}
            onChange={(val: string) => setNewValue(val, 'text4')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input with icon right"
            name="text"
            placeholder="Basic usage"
            type="text"
            icon="user"
            iconPosition="right"
            value={value.user}
            onChange={(val: string) => setNewValue(val, 'user')}
            className="Mb20 mw300"
          />

          <BaseInput
            label="Input number"
            name="number"
            placeholder="Input number"
            type="number"
            value={value.number}
            onChange={(val: number) => setNewValue(val, 'number')}
            className="mw300"
          />
        </div>
      </BaseContainer>

      <div className={styles.Textareas}>
        <BaseContainer>
          <div className="Headline Mb20">
            <LinkToViewCode
              title="TextArea."
              href="https://github.com/deniskeller/my-custom-components-library/tree/main/src/components/base/BaseInput"
            />
          </div>

          <BaseSubtitle className="Mb20">For multi-line input.</BaseSubtitle>

          <BaseTextarea
            className="mw400"
            placeholder="Some text"
            value={value.textarea1}
            onChange={(val: string) => setNewValue(val, 'textarea1')}
          />
        </BaseContainer>
        <BaseContainer>
          <BaseSubtitle className="Mb20">With character counting</BaseSubtitle>

          <BaseTextarea
            placeholder="Some text"
            showCount
            maxLength={100}
            label="Label for textarea with counter"
            value={value.textarea2}
            onChange={(val: string) => setNewValue(val, 'textarea2')}
          />
        </BaseContainer>
      </div>
    </>
  );
};

export default Input;
