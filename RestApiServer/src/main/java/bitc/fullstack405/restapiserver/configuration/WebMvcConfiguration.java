package bitc.fullstack405.restapiserver.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    // 스프링 웹 서버 설정을 위한 WebMvcConfigurer 인터페이스를 상속받아 addCorsMappings() 메서드를 오버라이딩 하여
    // CORS 설정을 서버 전체로 지정 할 수 있음
    // addMapping(URL 패턴): CORS 설정을 지정할 경로를 패턴 방식으로 지정, /** 로 지정 시, 스프링 서버의 모든 주소에 적용
    // allowedOrigins(허용 URL): 허용할 URL을 지정, 여러개의 URL 지정 가능
    // allowedMethods(허용할 통신 방식): 허용할 통신 방식을 지정, 여러 개의 통신 방식을 지정할 수 있음
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:4000")
                .allowedMethods("GET", "PUT", "POST", "DELETE");

    }
}
