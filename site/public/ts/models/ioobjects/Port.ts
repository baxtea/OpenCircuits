import {IO_PORT_LENGTH} from "../../utils/Constants";
import {Vector,V} from "../../utils/math/Vector";

import {Component} from "./Component";

export abstract class Port {
    protected parent: Component;
    protected isOn: boolean;

    protected dir: Vector;

	protected origin: Vector;
	protected target: Vector;

    protected constructor(parent: Component, dir: Vector) {
        this.parent = parent;
		this.isOn = false;

        this.dir = dir;
		this.origin = V(0, 0);
		this.target = dir.scale(IO_PORT_LENGTH);
    }

    public setOriginPos(pos: Vector): void {
        this.origin = pos;
        this.dir = this.target.sub(this.origin).normalize();
    }
    public setTargetPos(pos: Vector): void {
        this.target = pos;
        this.dir = this.target.sub(this.origin).normalize();
    }

	public getParent(): Component {
		return this.parent;
	}
	public getIsOn(): boolean {
		return this.isOn;
	}

    public getDir(): Vector {
        return this.dir.copy();
    }
	public getOriginPos(): Vector {
		return this.origin.copy();
	}
	public getTargetPos(): Vector {
        return this.target.copy();
	}

    public getWorldDir(): Vector {
        return this.parent.transformPoint(this.dir).sub(this.parent.getPos()).normalize();
    }
	public getWorldOriginPos(): Vector {
		return this.parent.transformPoint(this.origin);
	}
	public getWorldTargetPos(): Vector {
        return this.parent.transformPoint(this.target);
	}

}
