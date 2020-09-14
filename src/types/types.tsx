export interface TLabels {
  name: string;
  color: string;
  id: number;
};

export interface Item {
  id: number;
  title: string;
  labels: Array<TLabels>;
};

export interface TItemResult {
  title: string;
  color: string;
  label: string;
}