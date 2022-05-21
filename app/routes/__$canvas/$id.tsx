import type { LoaderFunction, ActionFunction, LinksFunction } from '@remix-run/node';
import type { Shape as ShapeModel } from '~/models/shape.server';
import { json, redirect } from '@remix-run/node';
import * as Remix from '@remix-run/react';
import * as shapeModel from '~/models/shape.server';
import * as Config from '~/components/config';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: Config.styles }];

export const loader: LoaderFunction = async ({ params }) => {
  const shape = await shapeModel.getShapeById(Number(params.id!));
  return json(shape);
};

export const action: ActionFunction = async ({ params, request, context }) => {
  const formData = await request.formData();
  const shapeId = Number(params.id!);
  const action = formData.get('__action');

  if (action === 'update') {
    const formattedEntries = Array.from(formData.entries()).map(([key, value]) => [
      key,
      ['x', 'y', 'width', 'height'].includes(key) ? Number(value) : value,
    ]);
    const { __action, ...shapeData } = Object.fromEntries(formattedEntries);
    const shape = await shapeModel.updateShape(shapeId, shapeData);
    return json(shape);
  } else if (action === 'delete') {
    await shapeModel.deleteShape(shapeId);
    return redirect('/#');
  }

  return loader({ params, request, context });
};

export default function NewShape() {
  const shape = Remix.useLoaderData<ShapeModel>();

  return (
    <Config.Root>
      <input type="hidden" name="type" value={shape.type} />
      <Config.Panel>
        <Config.Field
          type="number"
          label="x"
          name="x"
          pattern="[0-9]+"
          autoFocus
          defaultValue={shape.x || undefined}
        />

        <Config.Field
          type="number"
          label="y"
          name="y"
          pattern="[0-9]+"
          defaultValue={shape.y || undefined}
        />

        <Config.Field
          type="number"
          label="width"
          name="width"
          pattern="[0-9]+"
          defaultValue={shape.width}
        />

        <Config.Field
          type="number"
          label="height"
          name="height"
          pattern="[0-9]+"
          defaultValue={shape.height}
        />
      </Config.Panel>
      <Config.Panel>
        <Config.Field
          type="color"
          label="background"
          name="background_color"
          defaultValue={shape.background_color || undefined}
        />
      </Config.Panel>
      <Config.Footer>
        <button name="__action" value="update">
          update
        </button>
        <button name="__action" value="delete">
          delete
        </button>
      </Config.Footer>
    </Config.Root>
  );
}
