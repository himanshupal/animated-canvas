import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Line } from "@motion-canvas/2d/lib/components";
import { all } from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
  const lines = [];

  for (let i = -5; i <= 5; ++i) {
    const line0 = createRef<Line>();
    const line1 = createRef<Line>();

    view.add(
      <Line
        ref={line0}
        lineWidth={8}
        lineCap="square"
        stroke="white"
        points={[
          [-i * 100, -500],
          [-i * 100, 500],
        ]}
      />
    );

    view.add(
      <Line
        ref={line1}
        lineWidth={8}
        lineCap="square"
        stroke="white"
        points={[
          [500, -i * 100],
          [-500, -i * 100],
        ]}
      />
    );

    lines.push([line0, line1]);
  }

  yield* all(
    ...lines.flatMap(([line0, line1]) => [
      line0().position.y(500, 5).to(-500, 5),
      line1().position.x(500, 5).to(-500, 5),
    ])
  );
});
