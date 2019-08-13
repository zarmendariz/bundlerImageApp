let port = process.env.PORT;
if (port == null || port =="") {
  port = 8000;
}
app.listen(port);

const Index = () => (
  <div>
    <p>Sample app using React and Next.js</p>
  </div>
);

export default Index;
