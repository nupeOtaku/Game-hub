export const getCropImageUrl = (url: string) => {
  if (!url) {
    return '';
  }

  // Define the target string to identify the portion of the URL before the cropping parameters
  const target = 'media/';

  // Find the index where the target string ends in the given URL
  const index = url.indexOf(target) + target.length;

  // Slice the URL into two parts: before and after the target string
  const beforeTarget = url.slice(0, index);
  const afterTarget = url.slice(index);

  // Add the cropping parameters to the URL
  const croppedUrl = beforeTarget + 'crop/600/400/' + afterTarget;

  // Return the modified URL with cropping parameters
  return croppedUrl;
};
