export type ProjectSignal = { project: string; owner: string; profile: string; active: boolean };

export const signal: ProjectSignal = { project: "finance-clock-9f8g", owner: "uoamfnwjx", profile: "0030", active: true };

export function headline(value: ProjectSignal = signal): string {
  return value.project + " / " + value.owner;
}
