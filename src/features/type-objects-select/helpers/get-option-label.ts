/* eslint-disable @typescript-eslint/no-explicit-any */

export default function getOptionLabel(option: any, labelProp: string) {
  const splitLabels = labelProp.split('->');
  let label = '';
  let currentLabelValue = option;

  for (const splitLabel of splitLabels) {
    const splitAndLabel = splitLabel.split('&');

    for (const andLabel of splitAndLabel) {
      const labelValue =
        'object' in currentLabelValue
          ? currentLabelValue.object[andLabel]
          : currentLabelValue[andLabel];

      if (!labelValue) continue;

      if (typeof labelValue === 'object') {
        currentLabelValue = labelValue;
        continue;
      }

      label += `${labelValue} `;
    }
  }

  return label.trim();
}
