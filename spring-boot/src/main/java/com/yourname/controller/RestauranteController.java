package com.yourname.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.yourname.entity.Data;
import com.yourname.entity.Restaurante;
import com.yourname.service.RestauranteService;

@RestController
@RequestMapping("/restaurante")
public class RestauranteController {

    @Autowired
    private RestauranteService studentService;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public Data getAllStudents(){
        return studentService.getAllRestaurantes();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = "application/json")
    public Data getStudentById(@PathVariable("id") int id){
        return studentService.getStudentById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Data deleteStudentById(@PathVariable("id") int id){
        return studentService.removeStudentById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Data updateRestaurante(@RequestBody Restaurante restaurante){
        return studentService.updateStudent(restaurante);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Data insertStudent(@RequestBody Restaurante restaurante){
        return studentService.insertStudent(restaurante);
    }
    
    @RequestMapping(value = "/random-restaurante", method = RequestMethod.GET, produces = "application/json")
    public Data getRandomRestaurant(){
    	return studentService.getRandomRestaurant();
    }
    
    /**
     * POST /uploadFile -> receive and locally save a file.
     * 
     * @param uploadfile The uploaded file as Multipart file parameter in the 
     * HTTP request. The RequestParam name must be the same of the attribute 
     * "name" in the input tag with type file.
     * 
     * @return An http OK status in case of success, an http 4xx status in case 
     * of errors.
     */
    @RequestMapping(value = "/uploadFile", headers=("content-type=multipart/*"), method = RequestMethod.POST) 
    @ResponseBody
    public ResponseEntity<?> uploadFile(
        @RequestParam("uploadfile") MultipartFile uploadfile) {
      
    	String filename = null;
      try {
        // Get the filename and build the local file path (be sure that the 
        // application have write permissions on such directory)
    	filename = uploadfile.getOriginalFilename();
        String directory = "/Users/alejandropalacio/Downloads/uploads";
        String filepath = Paths.get(directory, filename).toString();
        
        // Save the file locally
        BufferedOutputStream stream =
            new BufferedOutputStream(new FileOutputStream(new File(filepath)));
        stream.write(uploadfile.getBytes());
        stream.close();
      }
      catch (Exception e) {
        System.out.println(e.getMessage());
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
      // ruta relativa archivo a json
      return new ResponseEntity<>("{\"filename\":\""+filename+"\"}",HttpStatus.OK);
    } // method uploadFile
    
    /**
     * get file from server.
     * @param id id file.
     * @return path file.
     * @throws IOException
     */
    @RequestMapping(value = "/picture/{id:.+}", method = RequestMethod.GET)
    @ResponseBody
    public HttpEntity<byte[]> getArticleImage(@PathVariable("id") String id) throws IOException {

        // 1. download img from http://internal-picture-db/id.jpg ... 
    	String filePath = "/Users/alejandropalacio/Downloads/uploads/" + id;

    	byte[] image = Files.readAllBytes(new File(filePath).toPath());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentType(MediaType.IMAGE_PNG);
        headers.setContentType(MediaType.IMAGE_GIF);
        headers.setContentLength(image.length);

        return new HttpEntity<byte[]>(image, headers);
    }
}
