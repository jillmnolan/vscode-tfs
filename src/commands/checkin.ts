import * as vscode from "vscode"
import { tf } from "../tfs/tfExe"

export async function checkin(uri: vscode.Uri): Promise<void> {
  const task = tf(["checkin", uri.fsPath, "/recursive"])

  vscode.window.setStatusBarMessage("TFS: Checking In...", task)
  const { stdout } = await task

  const messageTask = vscode.window.showInformationMessage(stdout)
  vscode.window.setStatusBarMessage(`TFS: ${uri.fsPath} successfully checked in.`, messageTask)
  await messageTask
}
