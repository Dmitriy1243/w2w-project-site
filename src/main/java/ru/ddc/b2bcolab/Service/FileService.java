package ru.ddc.b2bcolab.Service;

import org.springframework.web.multipart.MultipartFile;
import ru.ddc.b2bcolab.model.FileInfo;

import java.io.IOException;

public interface FileService {

    FileInfo upload(MultipartFile resource) throws IOException;
}
