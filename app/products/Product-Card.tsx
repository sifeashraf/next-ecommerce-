import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Link } from "@mui/material";
export default function ProductCard({ data }) {
  return (
    <Grid xs={12} tablet={6} laptop={4}>
      <Link href={`/products/${data.id}`}>
        <div style={{ width: "320px", margin: "auto", height: "330px" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={data.attributes.banner.data[0].attributes.formats.large.url}
            sx={{ borderRadius: "10px", height: 170 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <div className="limit-text">{data.attributes.description}</div>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      </Link>
    </Grid>
  );
}
