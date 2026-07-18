import { Clipboard, type LaunchProps, showHUD } from "@raycast/api";
import { addressFromPublicKeyHash } from "./lib/bitcoin";

export default async function Command(props: LaunchProps<{ arguments: Arguments.AddressFromPubkeyHash }>) {
  try {
    const address = addressFromPublicKeyHash(props.arguments.pubkeyHash);
    await Clipboard.copy(address);
    await showHUD(`Copied ${address}`, { clearRootSearch: true });
  } catch {
    await showHUD("Invalid public key hash", { clearRootSearch: true });
  }
}
