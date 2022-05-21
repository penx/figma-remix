import type { Shape, Prisma } from './prisma.server';
import { prisma } from '~/models/prisma.server';

async function createShape(shape: Prisma.ShapeCreateInput) {
  return prisma.shape.create({ data: shape });
}

async function updateShape(shapeId: Shape['id'], shape: Prisma.ShapeUpdateInput) {
  return prisma.shape.update({ data: shape, where: { id: shapeId } });
}

async function getAllShapes() {
  return prisma.shape.findMany({ orderBy: [{ id: 'asc' }] });
}

async function getShapeById(shapeId: Shape['id']) {
  return prisma.shape.findUnique({ where: { id: shapeId } });
}

async function deleteShape(shapeId: Shape['id']) {
  return prisma.shape.delete({ where: { id: shapeId } });
}

/* ---------------------------------------------------------------------------------------------- */

export { createShape, updateShape, getAllShapes, getShapeById, deleteShape };
export type { Shape, Prisma } from '~/models/prisma.server';
