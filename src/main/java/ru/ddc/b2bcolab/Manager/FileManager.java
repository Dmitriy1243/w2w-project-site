package ru.ddc.b2bcolab.Manager;

import org.springframework.context.annotation.Configuration;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

//public class FileManager implements FileMenagerInt {
//    private static final Path file = Path.of("C:\\Users\\Dmitriy\\Desktop\\fruit111.jpg");
//
//
//@Override
//    public FileManager upload(byte[] resource, String keyName) throws IOException {
//        Path path = Paths.get(String.valueOf(file), keyName);
//        Path file = Files.createFile(path);
//        FileOutputStream stream = null;
//        try {
//            stream = new FileOutputStream(file.toString());
//            stream.write(resource);
//        } finally {
//            stream.close();
//        }
//    return null;
//    }
//}
@Configuration
//public class FileManager implements FileManagerInt {
////    private static final Path DIRECTORY_PATH = Path.of("C:\\Users\\Dmitriy\\Desktop\\fruit111.jpg");
//@Override
//    public void upload(byte[] resource, String keyName) throws IOException {
//        String adFile = "C:/Users/Dmitriy/Desktop/fruit111.jpg";
//        Path path = Paths.get(adFile, keyName);
//        Path file = Files.createFile(path);
//        FileOutputStream stream = null;
//        try {
//            stream = new FileOutputStream(file.toString());
//            stream.write(resource);
//        } finally {
//            stream.close();
//        }
//    }
//}

public class FileManager {
    public void upload(byte[] resource, String keyName) throws IOException {
        String adFile =  "C:\\111.jpg"; // DIRECTORY_PATH
        Path path = Paths.get(adFile, keyName);
        Path file = Files.createFile(path);
        FileOutputStream stream = null;
        try {
            stream = new FileOutputStream(file.toString());
            stream.write(resource);
        } finally {
            stream.close();
        }
    }
}