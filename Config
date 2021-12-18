package com.mastek.dna.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter
{
	@Value("${api.username}")
	private String apiUsername;

	@Value("${api.password}")
	private String apiPassword;

	private static final String ROLE_USER = "USER";

	@Autowired
	public void configureGlobal(final AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception
	{
		authenticationManagerBuilder.inMemoryAuthentication()
				.withUser(apiUsername).password(apiPassword).roles(ROLE_USER);
	}

	@Override
	protected void configure(final HttpSecurity httpSecurity) throws Exception
	{
		httpSecurity.authorizeRequests()
				.anyRequest().permitAll();
	}
}
