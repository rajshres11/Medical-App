import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    Stack,
  } from '@mui/material';
  
  const posts = [
    {
      title: '5 Easy Tips for a Healthy Heart',
      image: '/images/blog/heart-health.jpg',
      excerpt: 'Learn simple daily habits that can keep your heart healthy and strong.',
      slug: '/blog/healthy-heart',
    },
    {
      title: 'Child Nutrition Essentials',
      image: '/images/blog/kids-nutrition.jpg',
      excerpt: 'Explore key nutrients and meal plans for your child’s healthy growth.',
      slug: '/blog/child-nutrition',
    },
    {
      title: 'Skin Care in Every Season',
      image: '/images/blog/skin-care.jpg',
      excerpt: 'Keep your skin glowing year-round with these dermatologist-approved tips.',
      slug: '/blog/skin-care-tips',
    },
  ];
  
  const BlogPreview = () => {
    return (
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Health Tips & Blogs
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Stay informed with our expert-written articles.
        </Typography>
  
        <Stack direction="row" spacing={3} justifyContent="space-between" flexWrap="wrap">
          {posts.map((post) => (
            <Card key={post.title} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="600">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  {post.excerpt}
                </Typography>
                <Button size="small" variant="outlined" href={post.slug}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default BlogPreview;