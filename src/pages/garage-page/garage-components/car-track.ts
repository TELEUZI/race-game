import { deleteCar, updateCar } from '../../../api/car-api';
import { drive, startEngine, stopEngine } from '../../../api/engine-api';
import { deleteWinner } from '../../../api/winners-api';
import BaseComponent from '../../../components/base-component';
import Button from '../../../components/button/button';
import Icon from '../../../components/menu/icon/icon';
import Car from './car';

const VELOCITY_MULTIPLIER = 2;
export default class CarTrack extends BaseComponent {
  private car: Car;

  private startButton: Button;

  private stopButton: Button;

  private id: number;

  updateButton: Button;

  deleteButton: Button;

  editButton: Button;

  onUpdate: () => void;

  constructor(name: string, color: string, id: number) {
    super('div', ['car-track']);
    this.id = id;
    this.car = new Car(name, color);
    this.startButton = new Button('Start', ['start-button'], this.animateCar.bind(this));
    this.stopButton = new Button('Stop', ['stop-button'], this.stopCarAnimation.bind(this));
    this.stopButton.setAttribute('disabled', 'disabled');
    this.updateButton = new Button(
      'Update',
      ['update-button', 'task__edit-btn'],
      this.editCar.bind(this),
    );
    this.deleteButton = new Button('Delete', ['delete-button'], this.deleteCar.bind(this));
    const icon = new Icon(['finish-flag']);
    const animationControls = new BaseComponent('div', ['car-track__animation-controls']);
    animationControls.insertChilds([this.startButton, this.stopButton]);
    this.insertChilds([icon, animationControls, this.car, this.deleteButton, this.updateButton]);
  }

  editCar(): void {
    this.car.setUpdateMode();
    this.updateButton.getNode().remove();
    this.updateButton = new Button('Submit', ['task__edit-btn'], this.submit.bind(this));
    this.node.append(this.updateButton.getNode());
  }

  submit(): void {
    this.car.setUpdateMode();
    this.car.setName(this.car.carNameUpdate.getValue());
    this.car.setColor(this.car.carColorUpdate.getValue());
    this.updateButton.getNode().remove();
    this.updateButton = new Button('Update', ['task__edit-btn'], this.editCar.bind(this));
    this.node.append(this.updateButton.getNode());
    this.submitCar();
  }

  async updateCar(): Promise<void> {
    this.editCar();
  }

  async submitCar(): Promise<void> {
    await updateCar(this.id, {
      name: this.car.getName(),
      color: this.car.getColor(),
    });
  }

  deleteCar(): void {
    deleteWinner(this.id);
    deleteCar(this.id);
    this.node.remove();
    this.onUpdate();
  }

  setColor(color: string): void {
    this.car.setColor(color);
  }

  async animateCar(): Promise<CarTrack | void> {
    const chars = await startEngine(this.id);
    this.car.startAnimation(`${(chars.distance / chars.velocity) * VELOCITY_MULTIPLIER}ms`);
    this.stopButton.removeAttribute('disabled');
    this.startButton.setAttribute('disabled', 'disabled');
    return new Promise((resolve) =>
      drive(this.id)
        .then((res) => {
          if (res.success) resolve(this);
          else {
            this.pauseAnimation();
          }
        })
        .catch(),
    );
  }

  async stopCarAnimation(): Promise<void> {
    await stopEngine(this.id);
    this.car.stopAnimation();
    this.startButton.removeAttribute('disabled');
    this.stopButton.setAttribute('disabled', 'disabled');
  }

  pauseAnimation(): void {
    this.car.pauseAnimation();
  }

  setOnUpdate(callback: () => void): void {
    this.onUpdate = callback;
  }

  getCar(): Car {
    return this.car;
  }

  getId(): number {
    return this.id;
  }
}
