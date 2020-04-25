/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

/**
 * API v4 Context
 * 
 * Note: This module is supported only with the Mozilla Rhino engine
 */

exports.get = function(name) {
	return org.eclipse.dirigible.api.v3.core.ContextFacade.get(name);
};

exports.set = function(name, value) {
	org.eclipse.dirigible.api.v3.core.ContextFacade.set(name, value);
};
