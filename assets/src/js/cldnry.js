import { Cloudinary } from 'cloudinary-core'

var cl = Cloudinary.new({cloud_name: "starbist"});
cl.responsive();
