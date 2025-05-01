import { render } from '@testing-library/react'; // Import testing library
import { TestPage } from "../pages/TestPage"; // Import the component you want to test

describe('TestPage', () => {
  it('renders correctly', () => {
    // Render the component
    const { getByText } = render(<TestPage />);

    // Check that some text (or element) you expect to be rendered is present in the document
    expect(getByText('Expected text in TestPage')).toBeInTheDocument();
  });
});