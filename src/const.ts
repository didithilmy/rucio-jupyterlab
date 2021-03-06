export const EXTENSION_ID = 'rucio-jupyterlab';
export const METADATA_ATTACHMENTS_KEY = 'rucio_attachments';
export const COMM_NAME_KERNEL = `${EXTENSION_ID}:kernel`;
export const COMM_NAME_FRONTEND = `${EXTENSION_ID}:frontend`;

export const searchByOptions = [
  { title: 'Datasets or Containers', value: 'datasets' },
  { title: 'Files', value: 'files' }
];

export const authTypeOptions = [
  { label: 'X.509 User Certificate', value: 'x509' },
  { label: 'X.509 Proxy Certificate', value: 'x509_proxy' },
  { label: 'Username & Password', value: 'userpass' }
];
