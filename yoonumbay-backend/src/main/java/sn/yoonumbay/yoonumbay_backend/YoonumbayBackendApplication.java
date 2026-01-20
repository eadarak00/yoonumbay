package sn.yoonumbay.yoonumbay_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class YoonumbayBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(YoonumbayBackendApplication.class, args);
	}

}
