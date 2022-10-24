import { useAccountInfo } from '../useAccountInfo';
import { useAppBaseInfo } from '../useAppBaseInfo';
import { useDeviceInfo } from '../useDeviceInfo';
import { useSystemInfo } from '../useSystemInfo';
import { useWindowInfo } from '../useWindowInfo';

export function useInfo() {
  const accountInfo = useAccountInfo();
  const appBaseInfo = useAppBaseInfo();
  const deviceInfo = useDeviceInfo();
  const systemInfo = useSystemInfo();
  const windowInfo = useWindowInfo();
  return {
    accountInfo,
    account: accountInfo,
    appBaseInfo,
    appBase: appBaseInfo,
    deviceInfo,
    device: deviceInfo,
    systemInfo,
    system: systemInfo,
    windowInfo: windowInfo,
    // window 是保留字，此处不提供别名
  };
}
