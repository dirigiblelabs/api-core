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
 * API v4 Exec
 * 
 */

exports.exec = function(commandLine, toAdd, toRemove) {
	return org.eclipse.dirigible.api.v3.core.ExecFacade.exec(commandLine, toAdd, toRemove);
};