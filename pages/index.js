import { EmptyState, Layout, Page } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Upload your desired image"
        action={{
          content: 'Upload Image',
          onAction: () => console.log('clicked')
        }}
        image={img}
      >
        <p>Select the make and model of your phone</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
