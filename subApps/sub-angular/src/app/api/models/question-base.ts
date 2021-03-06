export type QuestionItem<T> = {
  value?: T | undefined;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string, value: string }[];
};

export class QuestionBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string, value: string }[];

  constructor(options: QuestionItem<T>) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

export class TextBoxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
}

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
}
