class Drag {
  private body?: HTMLBodyElement;
  private x: number = 0;
  private y: number = 0;
  constructor() {}

  public run() {
    document.addEventListener("DOMContentLoaded", () => {
      this.body = document.querySelector("body")!;
      this.body.addEventListener("mousedown", this.mouseDown.bind(this));
    });
  }
  public mouseDown(e: MouseEvent) {
    const onMouseDown = this.mouseEvent.bind(this);
    this.x = e.pageX;
    this.y = e.pageY;
    this.body?.addEventListener("mousemove", onMouseDown);
    this.body?.addEventListener("mouseup", () => {
      this.body?.removeEventListener("mousemove", onMouseDown);
    });
    this.body?.addEventListener("mouseout", () => {
      this.body?.removeEventListener("mousemove", onMouseDown);
    });
  }
  public mouseEvent(e: MouseEvent) {
    const x = this.x - e.pageX;
    const y = this.y - e.pageY;
    this.toRender({ x, y });
  }
  public toRender(cord: { x: number; y: number }) {
    window.api.drag(cord);
  }
}
export default () => {
  const drag = new Drag();
  return {
    drag,
  };
};
