/*
 * Copyright (C) 2012 - 2013, KONA I Co.Ltd.
 * All rights reserved.
 *
 * This program is a property of KONA I. you can not redistribute it and/or modify it
 * without any permission of KONA I.
 *
 * @Author			: Choi Dong-sik (dschoi@konai.com)
 */
package com.example.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.vo.TestVo;

/**
 * The Class WelcomeController.
 */
@RestController
public class WelcomeController {

	/**
	 * Welcome.
	 *
	 * @return the string
	 */

	@RequestMapping("/welcome")
	public TestVo welcome() {
		TestVo testVo = new TestVo();
		testVo.setTest("test");
		return testVo;
	}

}
