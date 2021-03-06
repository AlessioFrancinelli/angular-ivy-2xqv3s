import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config = [
    {
      type: 'number-input',
      title: 'Question 2',
      value: null,
      params: {
        validators: [
          {
            type: 'max',
            validatorParams: '4',
            errorMessage: 'Le maximum est 4',
          },
          {
            type: 'min',
            validatorParams: '1',
            errorMessage: 'Le minimum est 1',
          },
        ],
      },
    },
    {
      type: 'radio-group',
      title: 'Question 1',
      value: null,
      list: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      type: 'condition',
      value: null,
      children: [
        {
          condition: true,
          conditions: [
            {
              componentIndex: '1',
              compareTo: false,
            },
          ],
          type: 'dropdown-list',
          title: '[Condition] Question 3 (Oui)',
          list: ['Option 1', 'Option 2', 'Option 3'],
          value: null,
        },
        {
          condition: false,
          type: 'yes-no-question',
          title: '[Condition] Question 3 (Non)',
          value: null,
        },
      ],
    },
    {
      type: 'yes-no-question',
      title: 'Question 4',
      value: null,
    },
  ];

  displayResults = false;

  constructor() {}

  elementChanged(elementIndex) {
    if (this.config[elementIndex].type === 'condition') {
      this.config[elementIndex].children.map((e) => {
        if (e.value !== null) {
          this.config[elementIndex].value = e.value;
        }
      });
    }
    if (
      elementIndex + 1 < this.config.length &&
      this.config[elementIndex + 1].type === 'condition'
    ) {
      for (let i = elementIndex + 1; i < this.config.length; i++) {
        if (this.config[i].type === 'condition') {
          this.config[i].children.map((e) => {
            e.value = null;
          });
        } else {
          this.config[i].value = null;
        }
      }
    }
  }

  showResults() {
    this.displayResults = true;
  }

  getParams(component) {
    if (component.params === null || component.params === undefined) {
      return null;
    }
    return component.params;
  }

  showData(): string {
    let result = '';
    for (let i = 0; i < this.config.length; i++) {
      result += this.config[i].value + '\n';
    }
    return result;
  }

  checkAllValues() {
    for (let i = 0; i < this.config.length; i++) {
      if (this.config[i].value === null) {
        this.displayResults = false;
        return false;
      }
    }
    return true;
  }

  getComponent(index) {
    if (this.config[index] === null || this.config[index] === undefined) {
      return;
    }
    if (this.config[index].type !== 'condition') {
      return this.config[index];
    } else if (this.config[index].type === 'condition') {
      for (let i = 0; i < this.config[index].children.length; i++) {
        if (
          this.config[index].children[i].condition ==
          this.config[index - 1].value
        ) {
          return this.config[index].children[i];
        }
      }
    }
  }

  getList(component) {
    if (component === null || component === undefined) {
      return null;
    }
    return component.list;
  }
}
