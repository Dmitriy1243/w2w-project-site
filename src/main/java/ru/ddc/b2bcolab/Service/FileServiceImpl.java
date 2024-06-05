package ru.ddc.b2bcolab.Service;

import lombok.RequiredArgsConstructor;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import ru.ddc.b2bcolab.Manager.FileManager;
import ru.ddc.b2bcolab.dao.FileDAO;
import ru.ddc.b2bcolab.model.FileInfo;

import java.io.IOException;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {

    private final FileDAO fileDAO;
//    private final FileMenagerInt fileMenagerInt;
//    private final FileManagerInt fileManagerInt;
private final FileManager fileManager;
    private String keyName;

    @Transactional(rollbackFor = {IOException.class})
    @Override
    public FileInfo upload(MultipartFile resource) throws IOException {
        String key = generateKey(resource.getName());
        FileInfo createdFile = FileInfo.builder()
                .name(resource.getOriginalFilename())
                .key(key)
                .size(resource.getSize())
                .build();
        createdFile = fileDAO.create(createdFile);

//        fileMenagerInt.upload(resource.getBytes(), keyName);
//        fileManagerInt.upload(resource.getBytes(), keyName);
        fileManager.upload(resource.getBytes(), key);

        return createdFile;
    }

    private String generateKey(String name) {

        return DigestUtils.md5Hex(name + LocalDateTime.now().toString());
    }
    }
