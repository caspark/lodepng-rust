var searchIndex = {};
searchIndex['lodepng'] = {"items":[[0,"","lodepng",""],[1,"CVec","","Horrible kludge to free memory allocated by lodepng"],[1,"RGBA","",""],[11,"r","","",0],[11,"g","","",0],[11,"b","","",0],[11,"a","","0 = transparent, 255 = opaque",0],[1,"RGB","","RGB 8bpp"],[11,"r","","",1],[11,"g","","",1],[11,"b","","",1],[1,"Chunk","",""],[1,"Bitmap","","Low-level representation of an image"],[11,"buffer","","Raw bitmap memory. Layout depends on color mode and bitdepth used to create it.",2],[11,"width","","Width in pixels",2],[11,"height","","Height in pixels",2],[2,"Image","","Images with <8bpp are represented as a bunch of bytes"],[12,"RawData","","",3],[12,"RGBA","","",3],[12,"RGB","","",3],[3,"decode_memory","","Converts PNG data in memory to raw pixel data."],[3,"decode32","","Same as `decode_memory`, but always decodes to 32-bit RGBA raw image"],[3,"decode24","","Same as `decode_memory`, but always decodes to 24-bit RGB raw image"],[3,"decode_file","","Load PNG from disk, from file with given name.\nSame as the other decode functions, but instead takes a file path as input."],[3,"decode32_file","","Same as `decode_file`, but always decodes to 32-bit RGBA raw image"],[3,"decode24_file","","Same as `decode_file`, but always decodes to 24-bit RGB raw image"],[3,"encode_memory","","Converts raw pixel data into a PNG image in memory. The colortype and bitdepth\nof the output PNG image cannot be chosen, they are automatically determined\nby the colortype, bitdepth and content of the input pixel data."],[3,"encode32","","Same as `encode_memory`, but always encodes from 32-bit RGBA raw image"],[3,"encode24","","Same as `encode_memory`, but always encodes from 24-bit RGB raw image"],[3,"encode_file","","Converts raw pixel data into a PNG file on disk.\nSame as the other encode functions, but instead takes a file path as output."],[3,"encode32_file","","Same as `encode_file`, but always encodes from 32-bit RGBA raw image"],[3,"encode24_file","","Same as `encode_file`, but always encodes from 24-bit RGB raw image"],[3,"convert","","Converts from any color type to 24-bit or 32-bit (only)"],[3,"auto_choose_color","","Automatically chooses color type that gives smallest amount of bits in the\noutput image, e.g. grey if there are only greyscale pixels, palette if there\nare less than 256 colors, ..."],[3,"zlib_compress","","Compresses data with Zlib.\nZlib adds a small header and trailer around the deflate data.\nThe data is output in the format of the zlib specification."],[3,"deflate","","Compress a buffer with deflate. See RFC 1951."],[10,"new","","",4],[10,"len","","Number of elements (pixels for pixel type, bytes for u8 type only)",4],[10,"to_vec","","*Copies* elements into a Vec",4],[10,"as_mut_slice","","Exposes memory as slice without copying",4],[10,"as_slice","","Exposes memory as slice without copying",4],[10,"as_u8_slice","","Exposes memory as slice without copying",4],[10,"drop","","",4],[0,"ffi","",""],[1,"Error","lodepng::ffi",""],[1,"ColorMode","","Color mode of an image. Contains all information required to decode the pixel\nbits to RGBA colors. This information is the same as used in the PNG file\nformat, and is used both for PNG and raw image data in LodePNG."],[11,"colortype","","color type, see PNG standard",5],[11,"bitdepth","","bits per sample, see PNG standard",5],[11,"palette","","palette (`PLTE` and `tRNS`)\nDynamically allocated with the colors of the palette, including alpha.\nWhen encoding a PNG, to store your colors in the palette of the LodePNGColorMode, first use\nlodepng_palette_clear, then for each color use lodepng_palette_add.\nIf you encode an image without alpha with palette, don't forget to put value 255 in each A byte of the palette.",5],[11,"palettesize","","palette size in number of colors (amount of bytes is 4 * `palettesize`)",5],[1,"CompressSettings","","Settings for zlib compression. Tweaking these settings tweaks the balance between speed and compression ratio."],[11,"btype","","the block type for LZ (0, 1, 2 or 3, see zlib standard). Should be 2 for proper compression.",6],[11,"use_lz77","","whether or not to use LZ77. Should be 1 for proper compression.",6],[11,"windowsize","","must be a power of two <= 32768. higher compresses more but is slower. Typical value: 2048.",6],[11,"minmatch","","mininum lz77 length. 3 is normally best, 6 can be better for some PNGs. Default: 0",6],[11,"nicematch","","stop searching if >= this length found. Set to 258 for best compression. Default: 128",6],[11,"lazymatching","","use lazy matching: better compression but a bit slower. Default: true",6],[11,"custom_zlib","","use custom zlib encoder instead of built in one (default: None)",6],[11,"custom_deflate","","use custom deflate encoder instead of built in one (default: null)\nif custom_zlib is used, custom_deflate is ignored since only the built in\nzlib function will call custom_deflate",6],[11,"custom_context","","optional custom settings for custom functions",6],[1,"Time","","The information of a Time chunk in PNG"],[11,"year","","",7],[11,"month","","",7],[11,"day","","",7],[11,"hour","","",7],[11,"minute","","",7],[11,"second","","",7],[1,"Info","","Information about the PNG image, except pixels, width and height"],[11,"compression_method","","compression method of the original file. Always 0.",8],[11,"filter_method","","filter method of the original file",8],[11,"interlace_method","","interlace method of the original file",8],[11,"color","","color type and bits, palette and transparency of the PNG file",8],[11,"background_defined","","suggested background color chunk (bKGD)\nThis color uses the same color mode as the PNG (except alpha channel), which can be 1-bit to 16-bit.",8],[11,"background_r","","red component of suggested background color",8],[11,"background_g","","green component of suggested background color",8],[11,"background_b","","blue component of suggested background color",8],[11,"time_defined","","time chunk (tIME)",8],[11,"time","","set to 1 to make the encoder generate a tIME chunk",8],[11,"phys_defined","","if 0, there is no pHYs chunk and the values below are undefined, if 1 else there is one",8],[11,"phys_x","","pixels per unit in x direction",8],[11,"phys_y","","pixels per unit in y direction",8],[11,"phys_unit","","may be 0 (unknown unit) or 1 (metre)",8],[1,"DecoderSettings","","Settings for the decoder. This contains settings for the PNG and the Zlib decoder, but not the Info settings from the Info structs."],[11,"ignore_crc","","ignore CRC checksums",9],[11,"fix_png","","The fix_png setting, if 1, makes the decoder tolerant towards some PNG images\nthat do not correctly follow the PNG specification. This only supports errors\nthat are fixable, were found in images that are actually used on the web, and\nare silently tolerated by other decoders as well. Currently only one such fix\nis implemented: if a palette index is out of bounds given the palette size,\ninterpret it as opaque black.\nBy default this value is 0, which makes it stop with an error on such images.",9],[11,"color_convert","","whether to convert the PNG to the color type you want. Default: yes",9],[1,"EncoderSettings","",""],[11,"zlibsettings","","settings for the zlib encoder, such as window size, ...",10],[11,"auto_convert","","how to automatically choose output PNG color type, if at all",10],[11,"filter_palette_zero","","If true, follows the official PNG heuristic: if the PNG uses a palette or lower than\n8 bit depth, set all filters to zero. Otherwise use the filter_strategy. Note that to\ncompletely follow the official PNG heuristic, filter_palette_zero must be true and\nfilter_strategy must be LFS_MINSUM",10],[11,"filter_strategy","","Which filter strategy to use when not using zeroes due to filter_palette_zero.\nSet filter_palette_zero to 0 to ensure always using your chosen strategy. Default: LFS_MINSUM",10],[11,"force_palette","","force creating a `PLTE` chunk if colortype is 2 or 6 (= a suggested palette).\nIf colortype is 3, `PLTE` is _always_ created",10],[1,"State","","The settings, state and information for extended encoding and decoding"],[11,"decoder","","",11],[11,"encoder","","",11],[11,"info_raw","","specifies the format in which you would like to get the raw pixel buffer",11],[11,"info_png","","info of the PNG image obtained after decoding",11],[2,"ColorType","","Type for `decode`, `encode`, etc. Same as standard PNG color types."],[12,"LCT_GREY","","greyscale: 1, 2, 4, 8, 16 bit",12],[12,"LCT_RGB","","RGB: 8, 16 bit",12],[12,"LCT_PALETTE","","palette: 1, 2, 4, 8 bit",12],[12,"LCT_GREY_ALPHA","","greyscale with alpha: 8, 16 bit",12],[12,"LCT_RGBA","","RGB with alpha: 8, 16 bit",12],[2,"FilterStrategy","","automatically use color type with less bits per pixel if losslessly possible. Default: AUTO"],[12,"LFS_ZERO","","every filter at zero",13],[12,"LFS_MINSUM","","Use filter that gives minumum sum, as described in the official PNG filter heuristic.",13],[12,"LFS_ENTROPY","","Use the filter type that gives smallest Shannon entropy for this scanline. Depending\non the image, this is better or worse than minsum.",13],[12,"LFS_BRUTE_FORCE","","Brute-force-search PNG filters by compressing each filter for each scanline.\nExperimental, very slow, and only rarely gives better compression than MINSUM.",13],[12,"LFS_PREDEFINED","","use predefined_filters buffer: you specify the filter type for each scanline",13],[2,"AutoConvert","","automatically use color type with less bits per pixel if losslessly possible. Default: LAC_AUTO"],[12,"LAC_NO","","use color type user requested",14],[12,"LAC_ALPHA","","use color type user requested, but if only opaque pixels and RGBA or grey+alpha, use RGB or grey",14],[12,"LAC_AUTO","","use PNG color type that can losslessly represent the uncompressed image the smallest possible",14],[12,"LAC_AUTO_NO_NIBBLES","","like AUTO, but do not choose 1, 2 or 4 bit per pixel types.\nsometimes a PNG image compresses worse if less than 8 bits per pixels.",14],[12,"LAC_AUTO_NO_PALETTE","","like AUTO, but never choose palette color type. For small images, encoding\nthe palette may take more bytes than what is gained. Note that AUTO also\nalready prevents encoding the palette for extremely small images, but that may\nnot be sufficient because due to the compression it cannot predict when to\nswitch.",14],[12,"LAC_AUTO_NO_NIBBLES_NO_PALETTE","","",14],[3,"lodepng_decode_memory","",""],[3,"lodepng_encode_memory","",""],[3,"lodepng_compress_settings_init","",""],[3,"lodepng_color_mode_init","",""],[3,"lodepng_color_mode_cleanup","",""],[3,"lodepng_color_mode_copy","",""],[3,"lodepng_palette_clear","",""],[3,"lodepng_palette_add","",""],[3,"lodepng_get_bpp","",""],[3,"lodepng_get_channels","",""],[3,"lodepng_is_greyscale_type","",""],[3,"lodepng_is_alpha_type","",""],[3,"lodepng_is_palette_type","",""],[3,"lodepng_has_palette_alpha","",""],[3,"lodepng_can_have_alpha","",""],[3,"lodepng_get_raw_size","",""],[3,"lodepng_info_init","",""],[3,"lodepng_info_cleanup","",""],[3,"lodepng_info_copy","",""],[3,"lodepng_clear_text","",""],[3,"lodepng_add_text","",""],[3,"lodepng_clear_itext","",""],[3,"lodepng_add_itext","",""],[3,"lodepng_convert","",""],[3,"lodepng_decoder_settings_init","",""],[3,"lodepng_auto_choose_color","",""],[3,"lodepng_encoder_settings_init","",""],[3,"lodepng_state_init","",""],[3,"lodepng_state_cleanup","",""],[3,"lodepng_state_copy","",""],[3,"lodepng_decode","",""],[3,"lodepng_inspect","",""],[3,"lodepng_encode","",""],[3,"lodepng_chunk_length","",""],[3,"lodepng_chunk_type","",""],[3,"lodepng_chunk_type_equals","",""],[3,"lodepng_chunk_ancillary","",""],[3,"lodepng_chunk_private","",""],[3,"lodepng_chunk_safetocopy","",""],[3,"lodepng_chunk_data","",""],[3,"lodepng_chunk_check_crc","",""],[3,"lodepng_chunk_generate_crc","",""],[3,"lodepng_chunk_next","",""],[3,"lodepng_chunk_append","",""],[3,"lodepng_chunk_create","",""],[3,"lodepng_crc32","",""],[3,"lodepng_zlib_compress","",""],[3,"lodepng_deflate","",""],[10,"as_str","","Returns an English description of the numerical error code.",15],[10,"to_color_mode","","Create color mode with given type and bitdepth",12],[10,"new","","Creates decoder settings initialized to defaults",9],[10,"new","","Creates encoder settings initialized to defaults",10],[10,"to_result","","Helper function for the library",15],[10,"new","","Default compression settings",6],[10,"new","","",5],[10,"palette_clear","","",5],[10,"palette_add","","add 1 color to the palette",5],[10,"bpp","","get the total amount of bits per pixel, based on colortype and bitdepth in the struct",5],[10,"channels","","get the amount of color channels used, based on colortype in the struct.\nIf a palette is used, it counts as 1 channel.",5],[10,"is_greyscale_type","","is it a greyscale type? (only colortype 0 or 4)",5],[10,"is_alpha_type","","has it got an alpha channel? (only colortype 2 or 6)",5],[10,"is_palette_type","","has it got a palette? (only colortype 3)",5],[10,"has_palette_alpha","","only returns true if there is a palette and there is a value in the palette with alpha < 255.\nLoops through the palette to check this.",5],[10,"can_have_alpha","","Check if the given color info indicates the possibility of having non-opaque pixels in the PNG image.\nReturns true if the image can have translucent or invisible pixels (it still be opaque if it doesn't use such pixels).\nReturns false if the image can only have opaque pixels.\nIn detail, it returns true only if it's a color type with alpha, or has a palette with non-opaque values,\nor if \"key_defined\" is true.",5],[10,"raw_size","","Returns the byte size of a raw image buffer with given width, height and color mode",5],[10,"drop","","",5],[10,"clone","","",5],[10,"new","","",8],[10,"clear_text","","use this to clear the texts again after you filled them in",8],[10,"add_text","","push back both texts at once",8],[10,"clear_itext","","use this to clear the itexts again after you filled them in",8],[10,"add_itext","","push back the 4 texts of 1 chunk at once",8],[10,"drop","","",8],[10,"clone","","",8],[10,"new","","",11],[10,"decode","","Load PNG from buffer using State's settings",11],[10,"inspect","","Returns (width, height)",11],[10,"encode","","",11],[10,"encode_file","","",11],[10,"drop","","",11],[10,"clone","","",11],[10,"fmt","","",15],[10,"fmt","lodepng","",0],[10,"fmt","","",1],[10,"fmt","lodepng::ffi","",15],[10,"fmt","lodepng","",2],[10,"len","","",16],[10,"is_ancillary","","",16],[10,"is_private","","",16],[10,"is_safetocopy","","",16],[10,"data","","",16],[10,"check_crc","","",16],[10,"generate_crc","","",16],[10,"next","","",16],[10,"append","","",16],[10,"create","","",16]],"paths":[[1,"RGBA"],[1,"RGB"],[1,"Bitmap"],[2,"Image"],[1,"CVec"],[1,"ColorMode"],[1,"CompressSettings"],[1,"Time"],[1,"Info"],[1,"DecoderSettings"],[1,"EncoderSettings"],[1,"State"],[2,"ColorType"],[2,"FilterStrategy"],[2,"AutoConvert"],[1,"Error"],[1,"Chunk"]]};
initSearch(searchIndex);
