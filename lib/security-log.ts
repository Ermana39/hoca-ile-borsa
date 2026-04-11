export type SecurityLogItem = {
  type: string;
  ip: string;
  detail: string;
  createdAt: string;
};

const securityLogs: SecurityLogItem[] = [];

export function readSecurityLogs(): SecurityLogItem[] {
  return [...securityLogs].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addSecurityLog(type: string, ip: string, detail: string) {
  securityLogs.unshift({
    type,
    ip,
    detail,
    createdAt: new Date().toISOString(),
  });

  if (securityLogs.length > 1000) {
    securityLogs.length = 1000;
  }
}