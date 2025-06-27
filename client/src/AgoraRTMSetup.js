import { createClient } from 'agora-rtm-react';

const appId = "94ea320c6d3f4304b287cf4f7caf505f";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);