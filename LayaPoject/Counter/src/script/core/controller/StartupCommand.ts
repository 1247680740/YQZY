import { ControllerPrepCommand } from "./ControllerPrepCommand";
import { ModelPrepCommand } from "./ModelPrepCommand";
import {ViewPrepCommand} from "./ViewPrepCommand";

/**
  * 初始化mvc controller
  */
export class StartupCommand extends puremvc.MacroCommand {

	public constructor() {
		super();
	}
	public initializeMacroCommand(): void {
		this.addSubCommand(ControllerPrepCommand);
		this.addSubCommand(ModelPrepCommand);
		this.addSubCommand(ViewPrepCommand);
	}
}