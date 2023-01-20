import APIConstants from '../enums/api-constants';
import { CarChars, DriveStatus } from '../interfaces/engine-api';

const ENGINE_URL = `${APIConstants.baseUrl}/engine`;

export enum DriveStatusName {
  started = 'started',
  stopped = 'stopped',
  drive = 'drive',
}

export async function startEngine(id: number): Promise<CarChars> {
  const response = await fetch(`${ENGINE_URL}?id=${id}&status=${DriveStatusName.started}`, {
    method: 'PATCH',
  });
  return response.json();
}

export async function stopEngine(id: number): Promise<CarChars> {
  const response = await fetch(`${ENGINE_URL}/?id=${id}&status=${DriveStatusName.stopped}`, {
    method: 'PATCH',
  });
  return response.json();
}

export async function startDrive(id: number): Promise<DriveStatus> {
  try {
    const response = await fetch(`${ENGINE_URL}?id=${id}&status=${DriveStatusName.drive}`, {
      method: 'PATCH',
    });
    return await response.json();
  } catch (error) {
    return { success: false };
  }
}
