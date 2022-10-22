class Apollo {
  private editor: HTMLDivElement = null;
  private readonly uuid = 'u' + globalThis.uuid().replace(/-/g, '');

  private constructor(private readonly root: HTMLDivElement) {}

  public run(): void {
    this.editor = htmlCreator({
      element: 'div',
      attributes: [
        { attribute: 'contenteditable', value: 'true' },
        { attribute: 'id', value: this.uuid },
      ],
    }) as HTMLDivElement;

    this.root.appendChild(this.editor);
  }

  public remove(): void {
    if (!!this.editor) {
      document.getElementById(this.uuid).remove();
      this.editor = null;
    }
  }

  public static create(root: string | HTMLElement): Apollo {
    if (typeof root === 'string') {
      let element = document.querySelector(
        root.startsWith('#') || root.startsWith('.') ? root : '#' + root
      );

      if (!element) {
        element = document.querySelector('.' + root);
        if (!element) {
          console.error(
            `Apollo error: root element with id ${root} not found.`
          );
          return;
        }
      }
      return new Apollo(element as HTMLDivElement);
    } else if (root instanceof HTMLElement) {
      return new Apollo(root as HTMLDivElement);
    }
    console.error(`Apollo error: root element not found.`);
  }
}

export default Apollo;
